import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNetworkXFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#network-x-fill_svg__a)"><path fill="#000" d="M15 7.5a.5.5 0 0 1-.5.5h-2v1a.5.5 0 0 1-1 0V8h-7v2H5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h.5V8h-2a.5.5 0 1 1 0-1h6V5.5H7a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.5V7h6a.5.5 0 0 1 .5.5m-1.146 2.646a.503.503 0 0 0-.708 0L12 11.293l-1.146-1.147a.5.5 0 0 0-.708.708L11.293 12l-1.147 1.146a.5.5 0 0 0 .708.708L12 12.707l1.146 1.147a.501.501 0 0 0 .708-.708L12.707 12l1.147-1.146a.503.503 0 0 0 0-.708" /></g><defs><clipPath id="network-x-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNetworkXFill);
const Memo = memo(ForwardRef);
export default Memo;