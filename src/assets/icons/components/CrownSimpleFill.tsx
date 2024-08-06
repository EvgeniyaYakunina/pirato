import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCrownSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#crown-simple-fill_svg__a)"><path fill="#000" d="M14.984 5.676q.001.01-.004.02l-1.418 6.492a1 1 0 0 1-.982.812H3.42a1 1 0 0 1-.982-.812L1.02 5.696q-.001-.01-.004-.02a1 1 0 0 1 1.734-.839l2.104 2.268 2.238-5.018v-.006a1 1 0 0 1 1.816 0v.006l2.238 5.018 2.104-2.268a1 1 0 0 1 1.732.839z" /></g><defs><clipPath id="crown-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCrownSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;