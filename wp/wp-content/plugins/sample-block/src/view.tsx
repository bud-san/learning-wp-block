/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
import { createRoot } from 'react-dom/client'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@src/shadcn/components/ui/accordion"

document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".wp-block-create-block-sample-block");
  accordions.forEach((accordion, i) => {
    const root = createRoot(accordion)
    root.render(
      <Accordion type="single" collapsible>
        <AccordionItem value={`item${i}`}>
          <AccordionTrigger>
            {accordion.querySelector(".sample-block__question")?.textContent}
          </AccordionTrigger>
          <AccordionContent>
            <div
              dangerouslySetInnerHTML={{
                __html: accordion.querySelector(".sample-block__answer")?.innerHTML || "",
              }}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  });
});

/* eslint-enable no-console */
