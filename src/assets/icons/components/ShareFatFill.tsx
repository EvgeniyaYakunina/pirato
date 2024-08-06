import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgShareFatFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#share-fat-fill_svg__a)"><path fill="#000" d="m14.854 7.354-5 5A.5.5 0 0 1 9 12V9.514c-3.569.203-6.016 2.517-6.703 3.25a.75.75 0 0 1-1.292-.598c.232-2.017 1.336-3.956 3.11-5.461C5.588 5.455 7.379 4.662 9 4.523V2a.5.5 0 0 1 .854-.354l5 5a.5.5 0 0 1 0 .708" /></g><defs><clipPath id="share-fat-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgShareFatFill);
const Memo = memo(ForwardRef);
export default Memo;