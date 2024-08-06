import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGitBranchFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#git-branch-fill_svg__a)"><path fill="#000" d="M14.5 4A2 2 0 1 0 12 5.937V7a.5.5 0 0 1-.5.5H6c-.17 0-.34.03-.5.086V5.937a2 2 0 1 0-1 0v4.126a2 2 0 1 0 1 0V9a.5.5 0 0 1 .5-.5h5.5A1.5 1.5 0 0 0 13 7V5.937A2.004 2.004 0 0 0 14.5 4M4 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0m2 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0" /></g><defs><clipPath id="git-branch-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGitBranchFill);
const Memo = memo(ForwardRef);
export default Memo;