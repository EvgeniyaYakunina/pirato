import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFileCloudFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#file-cloud-fill_svg__a)"><path fill="#000" d="M10 11.313A3.254 3.254 0 0 1 6.75 14.5H3.795c-1.24 0-2.295-1.014-2.295-2.255a2.25 2.25 0 0 1 1.205-1.987.25.25 0 0 1 .349.133.25.25 0 0 1 .012.138 4 4 0 0 0-.063.697.514.514 0 0 0 .469.524.5.5 0 0 0 .528-.5 3 3 0 1 1 6 .063M13.5 5.5v8a1 1 0 0 1-1 1H11a.5.5 0 0 1 0-1h1.5V6h-3a.5.5 0 0 1-.5-.5v-3H3.5V8a.5.5 0 1 1-1 0V2.5a1 1 0 0 1 1-1h6a.5.5 0 0 1 .354.146l3.5 3.5a.5.5 0 0 1 .146.354M11.793 5 10 3.207V5z" /></g><defs><clipPath id="file-cloud-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFileCloudFill);
const Memo = memo(ForwardRef);
export default Memo;