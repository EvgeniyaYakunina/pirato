import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgQuestionFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#question-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5M8 12a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m.5-3.045V9a.5.5 0 1 1-1 0v-.5A.5.5 0 0 1 8 8c.827 0 1.5-.562 1.5-1.25S8.827 5.5 8 5.5s-1.5.563-1.5 1.25V7a.5.5 0 1 1-1 0v-.25C5.5 5.51 6.621 4.5 8 4.5s2.5 1.01 2.5 2.25c0 1.086-.86 1.996-2 2.205" /></g><defs><clipPath id="question-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgQuestionFill);
const Memo = memo(ForwardRef);
export default Memo;