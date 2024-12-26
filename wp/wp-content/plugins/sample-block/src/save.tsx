/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { BlockSaveProps } from '@wordpress/blocks'
import type { BlockAttributes } from '@src/@type/attribute.d.ts'

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({attributes}: BlockSaveProps<BlockAttributes>) {
  const blockProps = useBlockProps.save();
  return (
    <dl {...blockProps}>
      <dt
        className='sample-block__question'
      >{attributes.question}</dt>
      <RichText.Content
        className='sample-block__answer'
        tagName="dd"
        value={ attributes.answer }
      />
    </dl>
  );
}
