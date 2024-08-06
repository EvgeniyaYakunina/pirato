import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRadioactiveFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#radioactive-fill_svg__a)"><path fill="#000" d="M7.25 8a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0m-.986.22a1.75 1.75 0 0 1 1.045-1.828.25.25 0 0 0 .117-.354L5.672 3a1 1 0 0 0-1.444-.317 6.49 6.49 0 0 0-2.724 4.718 1.01 1.01 0 0 0 .594 1.013A1 1 0 0 0 2.5 8.5h3.516a.25.25 0 0 0 .248-.28m8.232-.819a6.49 6.49 0 0 0-2.724-4.718A1 1 0 0 0 10.328 3L8.574 6.038a.25.25 0 0 0 .117.354 1.75 1.75 0 0 1 1.045 1.827.25.25 0 0 0 .25.281H13.5a1 1 0 0 0 .947-.685c.044-.133.061-.274.049-.414M9.425 9.467a.25.25 0 0 0-.37-.071 1.75 1.75 0 0 1-2.11 0 .25.25 0 0 0-.37.071l-1.747 3.027a1 1 0 0 0 .445 1.408 6.52 6.52 0 0 0 5.454 0 1 1 0 0 0 .445-1.408z" /></g><defs><clipPath id="radioactive-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgRadioactiveFill);
const Memo = memo(ForwardRef);
export default Memo;