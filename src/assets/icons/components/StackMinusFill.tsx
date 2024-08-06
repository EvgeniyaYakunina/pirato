import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgStackMinusFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#stack-minus-fill_svg__a)"><path fill="#000" d="M14.432 7.75a.5.5 0 0 1-.182.682l-6 3.5a.5.5 0 0 1-.504 0l-6-3.5a.5.5 0 0 1 .504-.864L8 10.921l5.75-3.353a.5.5 0 0 1 .682.182M1.75 5.432l6 3.5a.5.5 0 0 0 .504 0l6-3.5a.5.5 0 0 0 0-.864l-6-3.5a.5.5 0 0 0-.504 0l-6 3.5a.5.5 0 0 0 0 .864M14.5 12h-3a.5.5 0 1 0 0 1h3a.5.5 0 1 0 0-1m-5.75 1.485-.75.438-5.75-3.355a.5.5 0 0 0-.5.864l6 3.5a.5.5 0 0 0 .504 0l1-.583a.5.5 0 1 0-.504-.864" /></g><defs><clipPath id="stack-minus-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgStackMinusFill);
const Memo = memo(ForwardRef);
export default Memo;