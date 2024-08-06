import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRepeatOnceFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#repeat-once-fill_svg__a)"><path fill="#000" d="M1.5 8A4.505 4.505 0 0 1 6 3.5h6v-1a.5.5 0 0 1 .854-.354l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5A.5.5 0 0 1 12 5.5v-1H6A3.504 3.504 0 0 0 2.5 8a.5.5 0 1 1-1 0M14 7.5a.5.5 0 0 0-.5.5 3.504 3.504 0 0 1-3.5 3.5H4v-1a.5.5 0 0 0-.854-.354l-1.5 1.5a.5.5 0 0 0 0 .708l1.5 1.5A.5.5 0 0 0 4 13.5v-1h6A4.504 4.504 0 0 0 14.5 8a.5.5 0 0 0-.5-.5M8.5 10a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.724-.448l-1 .5a.5.5 0 1 0 .448.895L8 7.309v2.19a.5.5 0 0 0 .5.5" /></g><defs><clipPath id="repeat-once-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgRepeatOnceFill);
const Memo = memo(ForwardRef);
export default Memo;