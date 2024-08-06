import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBookmarksSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g fill="#000" clipPath="url(#bookmarks-simple-fill_svg__a)"><path d="M10 3.5H4a1 1 0 0 0-1 1V14a.5.5 0 0 0 .79.407L7 12.114l3.21 2.293A.5.5 0 0 0 11 14V4.5a1 1 0 0 0-1-1" /><path d="M12 1.5H5.5a.5.5 0 1 0 0 1H12V12a.5.5 0 0 0 1 0V2.5a1 1 0 0 0-1-1" /></g><defs><clipPath id="bookmarks-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBookmarksSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;