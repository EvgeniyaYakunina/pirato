import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGitMergeFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#git-merge-fill_svg__a)"><path fill="#000" d="M13 7a2 2 0 0 0-1.918 1.438l-2.638-.375a.5.5 0 0 1-.31-.17L5.902 5.284a2 2 0 1 0-1.402.154v5.125a2 2 0 1 0 1 0V6.352l1.875 2.187a1.5 1.5 0 0 0 .927.51l2.75.392A2 2 0 1 0 13 7m-7 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7-2.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" /></g><defs><clipPath id="git-merge-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGitMergeFill);
const Memo = memo(ForwardRef);
export default Memo;