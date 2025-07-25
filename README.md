# Stable Diffusion WebUI UX
A bespoke, highly adaptable, blazing fast user interface for Stable Diffusion, engineered for unmatched user experience and performance.

[💖 Your Support Makes a Difference! 💖](https://buymeacoffee.com/dayanbayah)

![](https://github.com/anapnoe/sd-webui-ux/blob/main/assets/images/anapnoe-ui-ux-flux.png)

## Features Overview
- **Mobile Responsive Design**: Optimal display and usability across various devices.
- **Versatile Micro-Template Engine**: Leverage for enhanced functionality through other extensions.
- **Customizable Theme Styles**: User-friendly interface for theme customization.
- **Styles Manager**: Versatile database-driven styles management.
- **Image Browser**: High-performance database-powered image navigation.
- **Civitai Images**: Ultra-fast virtualized browser for Civitai images.
- **Civitai Models**: Ultra-fast virtualized browser for Civitai models.
- **Built-in Console Log**: Debugging capabilities for developers.
- **Production and Development Modes**: Dynamically compile the web UI UX using Vite directly from the interface.
- **Ignore Overrides Option**: Flexibility to maintain original settings when necessary.
- **Enhanced Usability for Sliders**: Input range sliders support tick marks for improved interaction.
- **Toggle Input Modes**: Switch between slider and numeric input modes for a compact interface.
- **Compatible with Gradio 3 and 4**: Works seamlessly with both Gradio 3 and Gradio 4 frameworks.

### Seamless UI Integration with Extensions
- **Infinite Image Browsing Extension**
- **Deforum Extension**
- **Prompt-All-In-One Extension**
- **Aspect-Ratio-Helper Extension**

## Optimizations
- **Redundant Checkpoints & Extra Networks**: Removed redundant Checkpoints and Extra Networks (Textual Inversion, LoRA, Hypernetworks) from txt2img/img2img tabs. → Implemented single-instance infinite scroll to progressively load optimized assets + metadata from SQLite DB.
- **Inline Event Listeners**: Eradicating inline event listeners from "Extra Networks" cards and action buttons.
- **Event Delegation Pattern**: Applying an event delegation pattern to further streamline the code by consolidating event handling for "Extra Networks" cards and action buttons.
- **Optimized Stylesheets**: Enhanced visual coherence by substituting all default Gradio stylesheets in the DOM with an optimized version.
- **Inline Styles & Svelte Classes**: Improved efficiency by eliminating unnecessary inline styles and Svelte classes.
- **Database-Powered**: SQLite implementation enables rapid indexing/searching across: Extra Networks, Image Browser and Styles Manager.
- **Virtualized Grid**: Dynamic virtualized grid with memory/DOM efficiency for: Checkpoints, Textual Inversions, LoRA, Hypernetworks, Image Browser, Styles Manager, Civitai Images & Models.

### Performance Comparison: UI vs UX
| Core Metrics    | SD web UI  | SD web UI UX | Δ (%)      | Key Improvements |
|-----------------|-----------:|-------------:|-----------:|:-----------------|
| **JS Heap**     | 96,945,380 | 55,048,600   | **-43.2%** | **Memory Efficiency**: 43% ↓ JS heap memory |
| **Documents**   | 109        | 134          | **+22.9%** | **Resource Management**: Optimized overhead |
| **Nodes**       | 53,895     | 41,542       | **-22.9%** | **DOM Efficiency**: 23% ↓ nodes despite 23% ↑ documents |
| **Listeners**   | 8,195      | 4,178        | **-49.0%** | **Event Handling**: 49% ↓ listeners |

| **Visual Comparison** | |
|---|---|
| ![SD web UI](https://github.com/anapnoe/sd-webui-ux/blob/main/assets/images/stable-diffusion-webui-insights.png) | ![SD web UI UX](https://github.com/anapnoe/sd-webui-ux/blob/main/assets/images/stable-diffusion-webui-ux-insights.png) |
| *Automatic1111 - Stable Diffusion web UI* | *Anapnoe - Stable Diffusion web UI UX* |

### Performance Comparison: Forge vs UX Forge
| Core Metrics    | SD web UI Forge  | SD web UI UX Forge | Δ (%)       | Key Improvements |
|-----------------|-----------------:|-------------------:|------------:|:-----------------|
| **JS Heap**     | 56,121,196       | 45,049,884         | **-19.7%**  | **Memory Efficiency**: 19% ↓ JS heap memory |
| **Documents**   | 21               | 111                | **+428.6%** | **Resource Management**: Optimized overhead |
| **Nodes**       | 46,943           | 43,651             | **-7.0%**   | **DOM Efficiency**: 7% ↓ nodes despite 428% ↑ documents |
| **Listeners**   | 10,562           | 7,495              | **-29.0%**  | **Event Handling**: 29% ↓ listeners |

| **Visual Comparison** | |
|---|---|
| ![SD web UI Forge](https://github.com/anapnoe/sd-webui-ux/blob/main/assets/images/stable-diffusion-webui-forge-insights.png) | ![SD web UI UX Forge](https://github.com/anapnoe/sd-webui-ux/blob/main/assets/images/stable-diffusion-webui-ux-forge-insights.png) |
| *lllyasviel - Stable Diffusion web UI Forge* | *Anapnoe - Stable Diffusion web UI UX Forge* |
 
⚠️ *Baseline metrics reflect measurements with **all additional webui extensions disabled** - particularly relevant for SD Forge's extensive collection - to ensure balanced comparisons; enabling these extensions raises event listeners beyond 16,000 and introduces significant test-run performance variability.*


### 🚀 Scalable Event Handling & DOM Optimization  
SD webUI UX implements **event delegation** + **virtualized grid** for O(1) performance scaling.

**Stable Diffusion web UI & web UI Forge Constraints**:
- **DOM Bloat**: Loads all assets → 10k LoRAs create 60k+ DOM nodes (10k images + 50k+ container elements)
- **Listener Overload**: ~5 listeners per asset → 50k+ listeners for 10K LoRAs
- **O(n) Scaling**: Linear performance degradation ***(Checkpoints, Textual Inversions, LoRAs, Hypernetworks)***

**Stable Diffusion web UI UX & web UI UX Forge optimized Architecture**:
- **Virtualized Grid**: Renders only visible assets (~15 items in default viewport)  
- **Event Delegation**: Single listener handles all interactions  
- **DOM Recycling**: Dynamic pool manages thumbnail elements  

🎯 **Performance Outcome**:  
- Flat memory profile (≈50MB heap regardless of model assets library size)  
- O(1) event handling complexity  
- Instant scrolling with 100K+ assets   
  
## Todo
- [ ] Separate and organize CSS into individual files (in progress).
- [ ] Create documentation for component integration into UI/UX.
- [ ] Automatically update the Image Browser's SQLite database when files added or removed.
- [ ] Improve Civitai Models download manager.
- [ ] Add virtualization for **Tree View** component.
- [ ] Develop framework-specific npm packages for the UI/UX Dynamic Virtualized Grid component, supporting React, Vue, Svelte, Solid, and Qwik.

## Workspaces UI-UX (in progress)(early access)
The workspaces extension empowers you to create customized views and organize them according to your unique preferences. With an intuitive drag-and-drop interface, you can design workflows that are perfectly tailored to your specific requirements, giving you ultimate control over your work environment.

[🌟 Get early access to Workspaces! 🌟](https://buymeacoffee.com/dayanbayah)

![anapnoe-ui-ux-workspaces](https://github.com/anapnoe/sd-webui-ux/blob/main/assets/images/anapnoe-ui-ux-workspaces.png)

## Advanced Theme Style Configurator (in progress)(upcoming)
A sophisticated theme editor allowing you to personalize any aspect of the UI-UX. Tailor the visual experience of the user interface with the Advanced Theme Style configurator.

[🌟 Get early access to Advanced Theme Style Configurator! 🌟](https://buymeacoffee.com/dayanbayah)

![anapnoe-ui-ux-theme-editor-advanced](https://github.com/anapnoe/sd-webui-ux/blob/main/assets/images/anapnoe-ui-ux-theme-editor-advanced.png)


## SD Features
[Detailed feature showcase with images](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Features):
- Original txt2img and img2img modes
- One click install and run script (but you still must install python and git)
- Outpainting
- Inpainting
- Color Sketch
- Prompt Matrix
- Stable Diffusion Upscale
- Attention, specify parts of text that the model should pay more attention to
    - a man in a `((tuxedo))` - will pay more attention to tuxedo
    - a man in a `(tuxedo:1.21)` - alternative syntax
    - select text and press `Ctrl+Up` or `Ctrl+Down` (or `Command+Up` or `Command+Down` if you're on a MacOS) to automatically adjust attention to selected text (code contributed by anonymous user)
- Loopback, run img2img processing multiple times
- X/Y/Z plot, a way to draw a 3 dimensional plot of images with different parameters
- Textual Inversion
    - have as many embeddings as you want and use any names you like for them
    - use multiple embeddings with different numbers of vectors per token
    - works with half precision floating point numbers
    - train embeddings on 8GB (also reports of 6GB working)
- Extras tab with:
    - GFPGAN, neural network that fixes faces
    - CodeFormer, face restoration tool as an alternative to GFPGAN
    - RealESRGAN, neural network upscaler
    - ESRGAN, neural network upscaler with a lot of third party models
    - SwinIR and Swin2SR ([see here](https://github.com/AUTOMATIC1111/stable-diffusion-webui/pull/2092)), neural network upscalers
    - LDSR, Latent diffusion super resolution upscaling
- Resizing aspect ratio options
- Sampling method selection
    - Adjust sampler eta values (noise multiplier)
    - More advanced noise setting options
- Interrupt processing at any time
- 4GB video card support (also reports of 2GB working)
- Correct seeds for batches
- Live prompt token length validation
- Generation parameters
     - parameters you used to generate images are saved with that image
     - in PNG chunks for PNG, in EXIF for JPEG
     - can drag the image to PNG info tab to restore generation parameters and automatically copy them into UI
     - can be disabled in settings
     - drag and drop an image/text-parameters to promptbox
- Read Generation Parameters Button, loads parameters in promptbox to UI
- Settings page
- Running arbitrary python code from UI (must run with `--allow-code` to enable)
- Mouseover hints for most UI elements
- Possible to change defaults/mix/max/step values for UI elements via text config
- Tiling support, a checkbox to create images that can be tiled like textures
- Progress bar and live image generation preview
    - Can use a separate neural network to produce previews with almost none VRAM or compute requirement
- Negative prompt, an extra text field that allows you to list what you don't want to see in generated image
- Styles, a way to save part of prompt and easily apply them via dropdown later
- Variations, a way to generate same image but with tiny differences
- Seed resizing, a way to generate same image but at slightly different resolution
- CLIP interrogator, a button that tries to guess prompt from an image
- Prompt Editing, a way to change prompt mid-generation, say to start making a watermelon and switch to anime girl midway
- Batch Processing, process a group of files using img2img
- Img2img Alternative, reverse Euler method of cross attention control
- Highres Fix, a convenience option to produce high resolution pictures in one click without usual distortions
- Reloading checkpoints on the fly
- Checkpoint Merger, a tab that allows you to merge up to 3 checkpoints into one
- [Custom scripts](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Custom-Scripts) with many extensions from community
- [Composable-Diffusion](https://energy-based-model.github.io/Compositional-Visual-Generation-with-Composable-Diffusion-Models/), a way to use multiple prompts at once
     - separate prompts using uppercase `AND`
     - also supports weights for prompts: `a cat :1.2 AND a dog AND a penguin :2.2`
- No token limit for prompts (original stable diffusion lets you use up to 75 tokens)
- DeepDanbooru integration, creates danbooru style tags for anime prompts
- [xformers](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Xformers), major speed increase for select cards: (add `--xformers` to commandline args)
- via extension: [History tab](https://github.com/yfszzx/stable-diffusion-webui-images-browser): view, direct and delete images conveniently within the UI
- Generate forever option
- Training tab
     - hypernetworks and embeddings options
     - Preprocessing images: cropping, mirroring, autotagging using BLIP or deepdanbooru (for anime)
- Clip skip
- Hypernetworks
- Loras (same as Hypernetworks but more pretty)
- A separate UI where you can choose, with preview, which embeddings, hypernetworks or Loras to add to your prompt
- Can select to load a different VAE from settings screen
- Estimated completion time in progress bar
- API
- Support for dedicated [inpainting model](https://github.com/runwayml/stable-diffusion#inpainting-with-stable-diffusion) by RunwayML
- via extension: [Aesthetic Gradients](https://github.com/AUTOMATIC1111/stable-diffusion-webui-aesthetic-gradients), a way to generate images with a specific aesthetic by using clip images embeds (implementation of [https://github.com/vicgalle/stable-diffusion-aesthetic-gradients](https://github.com/vicgalle/stable-diffusion-aesthetic-gradients))
- [Stable Diffusion 2.0](https://github.com/Stability-AI/stablediffusion) support - see [wiki](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Features#stable-diffusion-20) for instructions
- [Alt-Diffusion](https://arxiv.org/abs/2211.06679) support - see [wiki](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Features#alt-diffusion) for instructions
- Now without any bad letters!
- Load checkpoints in safetensors format
- Eased resolution restriction: generated image's dimension must be a multiple of 8 rather than 64
- Now with a license!
- Reorder elements in the UI from settings screen

## Installation and Running
Make sure the required [dependencies](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Dependencies) are met and follow the instructions available for:
- [NVidia](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Install-and-Run-on-NVidia-GPUs) (recommended)
- [AMD](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Install-and-Run-on-AMD-GPUs) GPUs.
- [Intel CPUs, Intel GPUs (both integrated and discrete)](https://github.com/openvinotoolkit/stable-diffusion-webui/wiki/Installation-on-Intel-Silicon) (external wiki page)
- [Ascend NPUs](https://github.com/wangshuai09/stable-diffusion-webui/wiki/Install-and-run-on-Ascend-NPUs) (external wiki page)

Alternatively, use online services (like Google Colab):

- [List of Online Services](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Online-Services)

### Automatic Installation on Windows
1. Install [Python 3.10.6](https://www.python.org/downloads/release/python-3106/) (Newer version of Python does not support torch), checking "Add Python to PATH".
2. Install [git](https://git-scm.com/download/win).
3. Download the stable-diffusion-webui repository, for example by running `git clone https://github.com/anapnoe/stable-diffusion-webui-ux.git`.
4. Run `webui-user.bat` from Windows Explorer as normal, non-administrator, user.

### Automatic Installation on Linux
1. Install the dependencies:
```bash
# Debian-based:
sudo apt install wget git python3 python3-venv libgl1 libglib2.0-0
# Red Hat-based:
sudo dnf install wget git python3 gperftools-libs libglvnd-glx
# openSUSE-based:
sudo zypper install wget git python3 libtcmalloc4 libglvnd
# Arch-based:
sudo pacman -S wget git python3
```
If your system is very new, you need to install python3.11 or python3.10:
```bash
# Ubuntu 24.04
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt update
sudo apt install python3.11

# Manjaro/Arch
sudo pacman -S yay
yay -S python311 # do not confuse with python3.11 package

# Only for 3.11
# Then set up env variable in launch script
export python_cmd="python3.11"
# or in webui-user.sh
python_cmd="python3.11"
```
2. Navigate to the directory you would like the webui to be installed and execute the following command:
```bash
wget -q https://raw.githubusercontent.com/anapnoe/stable-diffusion-webui-ux/master/webui.sh
```
Or just clone the repo wherever you want:
```bash
git clone https://github.com/anapnoe/stable-diffusion-webui-ux.git
```

3. Run `webui.sh`.
4. Check `webui-user.sh` for options.
### Installation on Apple Silicon

Find the instructions [here](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Installation-on-Apple-Silicon).

## Contributing
Here's how to add code to this repo: [Contributing](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Contributing)

## Documentation

The documentation was moved from this README over to the project's [wiki](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki).

For the purposes of getting Google and other search engines to crawl the wiki, here's a link to the (not for humans) [crawlable wiki](https://github-wiki-see.page/m/AUTOMATIC1111/stable-diffusion-webui/wiki).

## Credits
Licenses for borrowed code can be found in `Settings -> Licenses` screen, and also in `html/licenses.html` file.


- Stable Diffusion - https://github.com/Stability-AI/stablediffusion, https://github.com/CompVis/taming-transformers, https://github.com/mcmonkey4eva/sd3-ref
- k-diffusion - https://github.com/crowsonkb/k-diffusion.git
- Spandrel - https://github.com/chaiNNer-org/spandrel implementing
  - GFPGAN - https://github.com/TencentARC/GFPGAN.git
  - CodeFormer - https://github.com/sczhou/CodeFormer
  - ESRGAN - https://github.com/xinntao/ESRGAN
  - SwinIR - https://github.com/JingyunLiang/SwinIR
  - Swin2SR - https://github.com/mv-lab/swin2sr
- LDSR - https://github.com/Hafiidz/latent-diffusion
- MiDaS - https://github.com/isl-org/MiDaS
- Ideas for optimizations - https://github.com/basujindal/stable-diffusion
- Cross Attention layer optimization - Doggettx - https://github.com/Doggettx/stable-diffusion, original idea for prompt editing.
- Cross Attention layer optimization - InvokeAI, lstein - https://github.com/invoke-ai/InvokeAI (originally http://github.com/lstein/stable-diffusion)
- Sub-quadratic Cross Attention layer optimization - Alex Birch (https://github.com/Birch-san/diffusers/pull/1), Amin Rezaei (https://github.com/AminRezaei0x443/memory-efficient-attention)
- Textual Inversion - Rinon Gal - https://github.com/rinongal/textual_inversion (we're not using his code, but we are using his ideas).
- Idea for SD upscale - https://github.com/jquesnelle/txt2imghd
- Noise generation for outpainting mk2 - https://github.com/parlance-zz/g-diffuser-bot
- CLIP interrogator idea and borrowing some code - https://github.com/pharmapsychotic/clip-interrogator
- Idea for Composable Diffusion - https://github.com/energy-based-model/Compositional-Visual-Generation-with-Composable-Diffusion-Models-PyTorch
- xformers - https://github.com/facebookresearch/xformers
- DeepDanbooru - interrogator for anime diffusers https://github.com/KichangKim/DeepDanbooru
- Sampling in float32 precision from a float16 UNet - marunine for the idea, Birch-san for the example Diffusers implementation (https://github.com/Birch-san/diffusers-play/tree/92feee6)
- Instruct pix2pix - Tim Brooks (star), Aleksander Holynski (star), Alexei A. Efros (no star) - https://github.com/timothybrooks/instruct-pix2pix
- Security advice - RyotaK
- UniPC sampler - Wenliang Zhao - https://github.com/wl-zhao/UniPC
- TAESD - Ollin Boer Bohan - https://github.com/madebyollin/taesd
- LyCORIS - KohakuBlueleaf
- Restart sampling - lambertae - https://github.com/Newbeeer/diffusion_restart_sampling
- Initial Gradio script - posted on 4chan by an Anonymous user. Thank you Anonymous user.
- (You)
