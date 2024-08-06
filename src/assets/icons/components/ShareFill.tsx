import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgShareFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#share-fill_svg__a)"><path fill="#000" d="m14.354 6.854-3 3A.5.5 0 0 1 10.5 9.5V7h-.187a5.5 5.5 0 0 0-5.327 4.125.5.5 0 1 1-.97-.25A6.496 6.496 0 0 1 10.314 6h.187V3.5a.5.5 0 0 1 .854-.354l3 3a.5.5 0 0 1 0 .708M12 13H2.5V5.5a.5.5 0 0 0-1 0v8a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 0-1" /></g><defs><clipPath id="share-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgShareFill);
const Memo = memo(ForwardRef);
export default Memo;