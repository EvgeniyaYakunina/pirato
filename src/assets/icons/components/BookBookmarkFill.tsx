import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBookBookmarkFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#book-bookmark-fill_svg__a)"><path fill="#000" d="M13 1.5H4.5a2 2 0 0 0-2 2V14a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 0-1H3.5a1 1 0 0 1 1-1H13a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-.5-.5m-1.5 6L9.9 6.3a.25.25 0 0 0-.3 0L8 7.5v-5h3.5z" /></g><defs><clipPath id="book-bookmark-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBookBookmarkFill);
const Memo = memo(ForwardRef);
export default Memo;