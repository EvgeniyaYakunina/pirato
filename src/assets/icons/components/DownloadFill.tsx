import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDownloadFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#download-fill_svg__a)"><path fill="#000" d="M4.646 5.354a.5.5 0 1 1 .708-.708L7.5 6.793V1.5a.5.5 0 1 1 1 0v5.293l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0zM15 8.5v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h3.275a.25.25 0 0 1 .177.073l1.486 1.49a1.5 1.5 0 0 0 2.125 0l1.487-1.488a.25.25 0 0 1 .175-.075H14a1 1 0 0 1 1 1m-2.5 2a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0" /></g><defs><clipPath id="download-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgDownloadFill);
const Memo = memo(ForwardRef);
export default Memo;