import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTrainFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#train-fill_svg__a)"><path fill="#000" d="M11.5 1.5h-7a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2H5l-.9 1.2a.5.5 0 1 0 .8.6l1.35-1.8h3.5l1.35 1.8a.5.5 0 0 0 .8-.6l-.9-1.2h.5a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2m-6.25 10a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m2.25-4h-4V5h4zm3.25 4a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m1.75-4h-4V5h4z" /></g><defs><clipPath id="train-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTrainFill);
const Memo = memo(ForwardRef);
export default Memo;