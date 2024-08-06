import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAirplaneLandingFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#airplane-landing-fill_svg__a)"><path fill="#000" d="M16 13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1 0-1h9a.5.5 0 0 1 .5.5M14.5 12a.5.5 0 0 0 .5-.5V9.27a2.51 2.51 0 0 0-1.83-2.409L9.368 5.8 7.96 2.447a.5.5 0 0 0-.303-.282l-.342-.113A1 1 0 0 0 6 3v1.837l-1.867-.532-.663-1.836a.5.5 0 0 0-.312-.304l-.342-.114A1 1 0 0 0 1.5 3v3.482A2.51 2.51 0 0 0 3.326 8.89l11.039 3.091q.067.019.135.019" /></g><defs><clipPath id="airplane-landing-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgAirplaneLandingFill);
const Memo = memo(ForwardRef);
export default Memo;