# Code Rain Presentation
I'm a huge fan of the matrix movies, and I wanted a presentation that had the matrix rain on the background. Perhaps this is possible with powerpoint, but I do not have the knowledge, skills, or inclination. As a result, I made this presentation using [reveal.js](https://revealjs.com).

This presentation was designed to run with zero installation overhead or internet access needed. In other words, just open the presentation.html file and your presentation is ready to go.

If I was going to use this personally, I would go through the effort of the "full setup" as described on [reveal.js's website](https://revealjs.com/installation/#full-setup). This would allow you to modify the content of the slides by only modifying the external markdown file. The reason I chose not to do that for this repository is because you would then need to have Node.js installed and I wanted to be able to simply send someone a zipped folder and have it "just work".

### This presentation has 4 rain modes. 
- The first mode is decelerate, where the numbers start at regular speed between transitions then slow down both their rain speed and number change speed until they stop.
- The second mode is brief freeze, where the numbers go at regular speed then freeze at their current position.
- The third mode is slow continue where the numbers slowly move down and change.
- The 4th mode is regular full speed rain. 

### AI was used for help with the JS and the CSS.

## Controls (for presenters):
    • Space — pause/resume rain
    • 1 — Mode: decelerate (ramp to full stop after transition)
    • 2 — Mode: brief-freeze (short move, then quick stop)
    • 3 — Mode: slow-continue (ramp to very slow per-column and keep running)
    
    • esc to see an overview of the slides

    Notes:
    • First slide stays continuous unless you manually pause with Space.
    • Digits twinkle randomly while raining; they freeze exactly on pause.

</details>

## Demo GIF
![](./Demo.gif)
Note: There is currently a bug with this presentation that the HUD for the mode on the first slide does not work. Pay attention to the mode indication below the static one.

## FAQs (Click to expand)
<details>
<summary><strong><h3 style="display:inline-block">How do I run this?</h3></strong></summary>
Simply open the presentation.html file and start presenting!
</details>

<details>
<summary><strong><h3 style="display:inline-block">How do I modify the content of the slides?</h3></strong></summary>
You will have to modify the contents of the presentation.html file. Scroll to the section that says "EDIT HERE" and you can edit up to where it says "END EDIT HERE". Note the format for the slides. Every slide needs to begin with {matrix} and in between the content of each slide, there is a divider, ---
</details>

<details>
<summary><strong><h3 style="display:inline-block">How do I change the presentation options?</h3></strong></summary>
There is a section of the presentation.html file that begins with "CONFIG" that allows you to customize options for the slides. It currently is focused primarily on the timings of the rain, which should allow you to slightly tweak it. If I get interest, I might add different color presets.
</details>

<details>
<summary><strong><h3 style="display:inline-block">What can I put in the slides?</h3></strong></summary>
Good question. It accepts Markdown [here](https://www.markdownguide.org/cheat-sheet/) is a handy guide, HTML, and several embedded media types (eg. images, videos, links, etc.). The [reveal.js site](https://revealjs.com) has documention on other functionality, such as vertical slides, transitions, notes, and more. 
</details>

<details>
<summary><strong><h3 style="display:inline-block">Do you have a demo site?</h3></strong></summary>
I do not. Luckily, this repository is small and should be quick to download. If you have any issues, please feel free to contact me via [my website](https://hhoover.net)
</details>

<details>
<summary><strong><h3 style="display:inline-block">Can I modify this and make it my own?</h3></strong></summary>
Yes! In fact, I encourage it. This repository is licensed under the INSERT LICENSE HERE. This code is not mine, and if modifying it makes you a better code/ have more fun with your presentations, please do.
</details>

<details><summary><h2 style="display:inline-block">Image Galleries</h2></strong></summary>
Image galleries have a special format in this presentation. The following is a brief overview.

    Gallery:
        • Use inside Markdown via HTML:
            <div class="gallery gallery-3">
            <img src="assets/a.webp" alt="Caption A">
            <img src="assets/b.webp" alt="Caption B">
            <img src="assets/c.webp" alt="Caption C">
            </div>
        • Up to 6 images. Use .gallery-2/.gallery-3/.gallery-4 for columns.
        • Add class="contain" on an <img> to avoid tile cropping.
        • Click any image to open the built-in lightbox; use ←/→ or on-screen arrows. 
