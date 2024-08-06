import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgStarAndCrescentFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#star-and-crescent-fill_svg__a)"><path fill="#000" d="M10 12.9a.5.5 0 0 1-.273.446A5.9 5.9 0 0 1 7 14 6 6 0 1 1 7 2a5.9 5.9 0 0 1 2.727.654.5.5 0 0 1 0 .891 5 5 0 0 0 0 8.91.5.5 0 0 1 .273.445m5.698-5.36-1.656-.714-.144-1.865a.5.5 0 0 0-.884-.28L11.852 6.09 10.12 5.66a.5.5 0 0 0-.55.738L10.51 8 9.57 9.6a.5.5 0 0 0 .551.74l1.732-.429 1.162 1.407a.5.5 0 0 0 .884-.28l.144-1.864 1.656-.715a.5.5 0 0 0 0-.918" /></g><defs><clipPath id="star-and-crescent-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgStarAndCrescentFill);
const Memo = memo(ForwardRef);
export default Memo;