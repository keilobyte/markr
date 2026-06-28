Approach

I input the Markr overview paragraph from the brief into Claude to generate the content for each of the requested sections in of the landing page.

I also asked Claude to create a company logo that I could use for the landing page, and used the first logo it generated for me in SVG format. I used fontawesome.com to grab some free icons for the Features section.

From here, I grabbed a Webflow boilerplate figma file so that I could get off the blocks fast, creating the sections I needed to fulfil the brief.

Once I had created the landing page in Figma, I used the 'Figma to Webflow' tool to generate the code. I pasted this into Webflow and manually adjusted/replaced items so format/work correctly (form elements etc had to be replaced in Webflow for example).

I installed NextJS using the recommended out-of-box config, and then manually created the HTML structure, using BEM naming conventions. I used VS Code and had Copilot on to help speed up autocompleting code as I went through.

SCSS wasn't working OOB for me, so used vanilla CSS code to style the page, using shared class names to move through as quickly as possible. 