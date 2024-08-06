import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSunHorizonFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#sun-horizon-fill_svg__a)"><path fill="#000" d="M15.5 10a.5.5 0 0 1-.5.5H1a.5.5 0 1 1 0-1h2.528a4.5 4.5 0 1 1 8.944 0H15a.5.5 0 0 1 .5.5M13 12H3a.5.5 0 0 0 0 1h10a.5.5 0 1 0 0-1M5.053 3.724a.5.5 0 1 0 .894-.448l-.5-1a.5.5 0 0 0-.894.448zM1.276 6.447l1 .5a.5.5 0 0 0 .448-.894l-1-.5a.5.5 0 1 0-.448.894M13.5 7a.5.5 0 0 0 .223-.053l1-.5a.499.499 0 1 0-.447-.894l-1 .5A.5.5 0 0 0 13.5 7m-3.224-3.053a.5.5 0 0 0 .672-.223l.5-1a.5.5 0 0 0-.896-.448l-.5 1a.5.5 0 0 0 .224.671" /></g><defs><clipPath id="sun-horizon-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSunHorizonFill);
const Memo = memo(ForwardRef);
export default Memo;