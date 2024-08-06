import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGitlabLogoSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#gitlab-logo-simple-fill_svg__a)"><path fill="#000" d="m13.009 11.129-4.58 3.235a.74.74 0 0 1-.859 0l-4.579-3.235a3.575 3.575 0 0 1-1.375-3.813L2.86 2.563a.746.746 0 0 1 1.425-.07L5.389 5.5h5.222l1.105-3.008a.746.746 0 0 1 1.425.07l1.243 4.758a3.57 3.57 0 0 1-1.375 3.809" /></g><defs><clipPath id="gitlab-logo-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGitlabLogoSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;