import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBookmarksFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#bookmarks-fill_svg__a)"><path fill="#000" d="M12 1.5H6a1 1 0 0 0-1 1v1H4a1 1 0 0 0-1 1V14a.5.5 0 0 0 .79.407L7 12.114l3.21 2.293A.5.5 0 0 0 11 14v-2.457l1.21.864A.5.5 0 0 0 13 12V2.5a1 1 0 0 0-1-1m0 9.529-1-.716V4.5a1 1 0 0 0-1-1H6v-1h6z" /></g><defs><clipPath id="bookmarks-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBookmarksFill);
const Memo = memo(ForwardRef);
export default Memo;