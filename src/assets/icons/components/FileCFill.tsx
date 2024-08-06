import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFileCFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#file-c-fill_svg__a)"><path fill="#000" d="M3 11.25c0 .688.449 1.25 1 1.25a.88.88 0 0 0 .63-.282.51.51 0 0 1 .68-.056.5.5 0 0 1 .051.738A1.88 1.88 0 0 1 4 13.5c-1.103 0-2-1.01-2-2.25S2.897 9 4 9a1.88 1.88 0 0 1 1.337.574.516.516 0 0 1 .046.694.5.5 0 0 1-.744.023A.9.9 0 0 0 4 10c-.551 0-1 .563-1 1.25M13.5 5.5v8a1 1 0 0 1-1 1H7.25a.25.25 0 0 1-.25-.25v-6.5a.25.25 0 0 0-.25-.25h-4a.25.25 0 0 1-.25-.25V2.5a1 1 0 0 1 1-1h6a.5.5 0 0 1 .354.146l3.5 3.5a.5.5 0 0 1 .146.354m-1.25 0L9.5 2.75V5.5z" /></g><defs><clipPath id="file-c-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFileCFill);
const Memo = memo(ForwardRef);
export default Memo;