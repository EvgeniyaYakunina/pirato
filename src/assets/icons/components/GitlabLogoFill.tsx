import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGitlabLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#gitlab-logo-fill_svg__a)"><path fill="#000" d="m14.384 7.319-1.243-4.756a.746.746 0 0 0-1.425-.07L10.611 5.5H5.39L4.284 2.492a.746.746 0 0 0-1.425.07L1.616 7.32a3.57 3.57 0 0 0 1.375 3.813l4.579 3.235a.74.74 0 0 0 .859 0l4.58-3.235a3.575 3.575 0 0 0 1.375-3.813m-11.842.437L7.133 11l-1.295.916-2.27-1.603a2.57 2.57 0 0 1-1.026-2.556M8 13.444l-1.296-.916L8 11.613l1.296.915zm4.432-3.131-2.27 1.603L8.867 11l4.59-3.244a2.57 2.57 0 0 1-1.025 2.557" /></g><defs><clipPath id="gitlab-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGitlabLogoFill);
const Memo = memo(ForwardRef);
export default Memo;