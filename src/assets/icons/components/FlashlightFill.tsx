import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFlashlightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#flashlight-fill_svg__a)"><path fill="#000" d="M11.5 1h-7a1 1 0 0 0-1 1v2.833c0 .216.07.427.2.6L5 7.167V14a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V7.167l1.3-1.734c.13-.173.2-.384.2-.6V2a1 1 0 0 0-1-1m-3 8.5a.5.5 0 1 1-1 0v-2a.5.5 0 1 1 1 0zm-4-6V2h7v1.5z" /></g><defs><clipPath id="flashlight-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFlashlightFill);
const Memo = memo(ForwardRef);
export default Memo;