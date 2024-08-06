import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGitCommitFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#git-commit-fill_svg__a)"><path fill="#000" d="M16 8a.5.5 0 0 1-.5.5h-4.036a3.5 3.5 0 0 1-6.928 0H.5a.5.5 0 0 1 0-1h4.036a3.5 3.5 0 0 1 6.928 0H15.5a.5.5 0 0 1 .5.5" /></g><defs><clipPath id="git-commit-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGitCommitFill);
const Memo = memo(ForwardRef);
export default Memo;