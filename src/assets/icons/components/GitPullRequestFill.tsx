import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGitPullRequestFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#git-pull-request-fill_svg__a)"><path fill="#000" d="M6.5 4A2 2 0 1 0 4 5.937v4.126a2 2 0 1 0 1 0V5.937A2.004 2.004 0 0 0 6.5 4m-1 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m9 0a2 2 0 1 1-2.5-1.937V6.914a.5.5 0 0 0-.146-.353L9.5 4.207V6a.5.5 0 1 1-1 0V3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-1.793l2.355 2.354A1.5 1.5 0 0 1 13 6.916v3.146A2 2 0 0 1 14.5 12" /></g><defs><clipPath id="git-pull-request-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGitPullRequestFill);
const Memo = memo(ForwardRef);
export default Memo;