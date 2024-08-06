import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgEyedropperSampleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#eyedropper-sample-fill_svg__a)"><path fill="#000" d="M14 4.206a2.24 2.24 0 0 0-.704-1.603c-.875-.83-2.295-.8-3.163.07L8.675 4.138a1.5 1.5 0 0 0-2.071.048l-.313.312a1 1 0 0 0 0 1.415l.125.129L3.23 9.229a2.48 2.48 0 0 0-.658 2.375l-.5 1.151a.85.85 0 0 0 .179.95.99.99 0 0 0 1.107.21l1.096-.477a2.5 2.5 0 0 0 2.315-.672l3.188-3.188.128.129a1 1 0 0 0 1.414 0l.313-.313a1.5 1.5 0 0 0 .046-2.073l1.484-1.492a2.23 2.23 0 0 0 .66-1.623M8.625 9.5H4.379l2.75-2.75 2.122 2.125z" /></g><defs><clipPath id="eyedropper-sample-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgEyedropperSampleFill);
const Memo = memo(ForwardRef);
export default Memo;