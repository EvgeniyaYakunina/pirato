import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgShareNetworkFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#share-network-fill_svg__a)"><path fill="#000" d="M13.25 12.5a2.25 2.25 0 1 1-4.366-.766L5.572 9.606a2.25 2.25 0 1 1 0-3.212l3.312-2.125a2.256 2.256 0 1 1 .542.84L6.114 7.237a2.25 2.25 0 0 1 0 1.532l3.312 2.128A2.25 2.25 0 0 1 13.25 12.5" /></g><defs><clipPath id="share-network-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgShareNetworkFill);
const Memo = memo(ForwardRef);
export default Memo;