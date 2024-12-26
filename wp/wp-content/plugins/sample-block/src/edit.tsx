/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

import { BlockEditProps } from '@wordpress/blocks'
import { TextControl } from '@wordpress/components';
import type { BlockAttributes } from '@src/@type/attribute.d.ts'
import { cn } from '@src/shadcn/lib/utils';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

export default function Edit({
  attributes,
  setAttributes,
}: BlockEditProps<BlockAttributes>) {
	return (
    <div {...useBlockProps()}>
      <TextControl
        className={cn(`
          sample-block__question
          `)}
        label={'質問'}
        value={attributes.question}
        onChange={(val) => setAttributes({question: val})}
      />
      <div>
        <label
          className={cn(`
          `)}
        >回答</label>
        <RichText
          tagName="div"
          className={cn(`
            sample-block__answer
          `)}
          value={ attributes.answer }
          allowedFormats={ [ 'core/bold', 'core/italic', 'core/strikethrough', 'core/link', 'core/image', 'core/subscript', 'core/superscript' ] } // リッチテキスト内で許可される装飾
          onChange={(val) => setAttributes({answer: val})} // 更新したコンテンツはブロック属性として保存
        />
      </div>
  </div>
	);
}
