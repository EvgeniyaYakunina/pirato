import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGitForkFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#git-fork-fill_svg__a)"><path fill="#000" d="M14 4a2 2 0 1 0-2.5 1.937V7a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V5.937a2 2 0 1 0-1 0V7A1.5 1.5 0 0 0 5 8.5h2.5v1.563a2 2 0 1 0 1 0V8.5H11A1.5 1.5 0 0 0 12.5 7V5.937A2.004 2.004 0 0 0 14 4m-5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0" /></g><defs><clipPath id="git-fork-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGitForkFill);
const Memo = memo(ForwardRef);
export default Memo;