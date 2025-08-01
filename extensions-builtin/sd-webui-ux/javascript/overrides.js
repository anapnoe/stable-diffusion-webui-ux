window.onAfterUiUpdate(() => {
    window.all_gallery_buttons = function() {
        // orig_all_gallery_buttons();
        const tabitem = gradioApp().querySelector('#main-nav-bar button.active')?.getAttribute('tabitemid');
        const visibleGalleryButtons = [];

        if (tabitem) {
            //console.log(tabitem, allGalleryButtons);
            const allGalleryButtons = gradioApp().querySelectorAll(`${tabitem} .gradio-gallery .thumbnails > .thumbnail-small`);

            allGalleryButtons?.forEach((elem) => {
                if (elem.parentElement.offsetParent && elem.parentElement.offsetParent !== document.body) {
                    visibleGalleryButtons.push(elem);
                }
            });
        }
        return visibleGalleryButtons;
    };

    window.submit_txt2img_upscale = function() {
        var res = submit(...arguments);
        res[2] = Math.max(selected_gallery_index(), 0);
        return res;
    };


    // Override imageMaskResize.js
    window.imageMaskResize = function() { };
    window.removeEventListener('resize', imageMaskResize);

    // Override function resizeHandle.js
    window.setupAllResizeHandles = function() { };

    window.extraNetworksSearchButton = function(tabname, extra_networks_tabname, event) {
        const attr = event.target.parentElement.parentElement.getAttribute('search-field');
        const searchTextarea = gradioApp().querySelector(attr);
        const button = event.target;
        const text = button.classList.contains('search-all') ? '' : button.textContent.trim();

        searchTextarea.value = text;
        window.updateInput(searchTextarea);
    };

    window.extraNetworksEditUserMetadata = function(event, tabname, extraPage) {
        const tid = `txt2img_${extraPage}_edit_user_metadata`;
        //console.log(event.target);
        window.popup_trigger.click();

        let editor = extraPageUserMetadataEditors[tid];

        if (!editor) {
            editor = {};
            editor.page = gradioApp().getElementById(tid);
            editor.nameTextarea = gradioApp().querySelector(`#${tid}_name` + ' textarea');
            editor.button = gradioApp().querySelector(`#${tid}_button`);
            extraPageUserMetadataEditors[tid] = editor;
        }

        const cardName = event.target.parentElement.parentElement.getAttribute('data-name') || event.target.parentElement.parentElement.parentElement.getAttribute('data-name');

        if (cardName) {
            editor.nameTextarea.value = cardName;
            updateInput(editor.nameTextarea);
            editor.button.click();
            popup(editor.page);
        } else {
            console.error('Card name is not found.');
        }

        event.stopPropagation();
    };


    window.cardClicked = function(tabname, textToAdd, textToAddNegative, allowNegativePrompt) {
        tabname = window.UIUX.FOCUS_PROMPT;
        if (textToAddNegative.length > 0) {
            updatePromptArea(textToAdd, gradioApp().querySelector("#" + tabname + "_prompt > label > textarea"));
            updatePromptArea(textToAddNegative, gradioApp().querySelector("#" + tabname + "_neg_prompt > label > textarea"), true);
        } else {
            var textarea = allowNegativePrompt ? activePromptTextarea[tabname] : gradioApp().querySelector("#" + tabname + "_prompt > label > textarea");
            updatePromptArea(textToAdd, textarea);
        }
    };

    let active_main_tab = gradioApp().getElementById('tab_txt2img');

    window.get_uiCurrentTabContent = function() {
        //console.log(active_main_tab);
        if (active_main_tab?.id === 'tab_txt2img') {
            return document.getElementById('txt2img_tabitem');
        } if (active_main_tab?.id === 'tab_img2img') {
            return document.getElementById('img2img_tabitem');
        }
    };

    window.mainTabs = function(element, tab) {
        //console.warn(element, tab);
        const root_dock = document.querySelector(`#root-dock-components`);
        const tab_active = document.querySelector(`#main-nav .active`);
        const wtb = document.querySelector(`#workspaces_tabitem`);
        if(root_dock && tab != "#tab_anapnoe_dock"){
            wtb.classList.add("no-redraw");
        }

        if (active_main_tab) {
            active_main_tab.click();
        }
        
        const ntab = document.querySelector(tab);
        if (ntab) {
            ntab.style.display = 'block';
            active_main_tab = ntab;
        }

        if(root_dock && tab != "#tab_anapnoe_dock"){
            setTimeout(() => {
                tab_active?.click();
                wtb.classList.remove("no-redraw");
            }, 500);
        }

    };

    window.restart_reload = function() {
        const messageElement = document.createElement('p');
        messageElement.style.cssText = `
            font-family: monospace;
            position: absolute;
            top: calc(40% + 110px);
            left: 50%;
            transform: translate(-50%, -50%);
            padding-left: 20px;
            text-align: center;
            width: max-content;
            white-space: pre;
        `;
        document.body.innerHTML = '';
        document.body.appendChild(messageElement);
        
        const animationFrames = [
            "   ",
            ".  ",
            ".. ",
            "...",
        ];

        let frameIndex = 0;
        function updateMessage() {
            const animation = animationFrames[frameIndex % animationFrames.length];
            messageElement.innerHTML = `Server is restarting please wait${animation} `;
            frameIndex++;
        }

        const requestPing = function() {
            updateMessage();
            requestGet("./internal/ping", {}, function(data) {
                location.reload();
            }, function() {
                setTimeout(requestPing, 500);
            });
        };

        updateMessage();
        setTimeout(requestPing, 1000);

        return [];
    };
    

});
