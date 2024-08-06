import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAngularLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#angular-logo-fill_svg__a)"><path fill="#000" d="M8 6.53 8.817 8H7.183zm6.496-1.964-1 7.5a.5.5 0 0 1-.272.382l-5 2.5a.5.5 0 0 1-.448 0l-5-2.5a.5.5 0 0 1-.272-.382l-1-7.5a.5.5 0 0 1 .304-.527l6-2.5a.5.5 0 0 1 .385 0l6 2.5a.5.5 0 0 1 .303.527m-3.559 5.192-2.5-4.5a.5.5 0 0 0-.874 0l-2.5 4.5a.5.5 0 1 0 .875.485L6.625 9h2.75l.688 1.243a.502.502 0 0 0 .918-.105.5.5 0 0 0-.043-.38" /></g><defs><clipPath id="angular-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgAngularLogoFill);
const Memo = memo(ForwardRef);
export default Memo;