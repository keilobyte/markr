Approach

To start, I input the Markr overview paragraph from the brief into Claude AI to generate the content for each of the requested sections in of the landing page. I also asked Claude to create a company logo that I could use for the landing page, and used the first logo it generated for me in SVG format. I used fontawesome.com to grab some free icons for the Features section.

From here, I grabbed a Webflow boilerplate Figma file so that I could get off the blocks fast, creating the sections I needed to fulfil the brief. I used colour-blocking to break up sections, using consistent paddings across sections for a consistent format.

Once I had created the landing page in Figma, I used the 'Figma to Webflow' tool to generate the code. I pasted this into Webflow and then spent some time manually adjusting/replacing items to format/work correctly.

I installed NextJS and used the recommended out-of-box config, and manually created the HTML structure, using BEM naming conventions. I used VS Code and had Copilot on to help speed up autocompleting code as I went through.

SCSS wasn't working OOB for me, so I used vanilla CSS code to style the page, using shared class names where possible to move through as quickly and efficiently as possible. I also ran it through Lighthouse afterwards to make sure it passed key benchmarks. 