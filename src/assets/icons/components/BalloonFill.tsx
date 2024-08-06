import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBalloonFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#balloon-fill_svg__a)"><path fill="#000" d="M8 1a5.506 5.506 0 0 0-5.5 5.5c0 1.464.587 3.089 1.57 4.344.756.963 1.657 1.625 2.62 1.943l-.65 1.516A.5.5 0 0 0 6.5 15h3a.5.5 0 0 0 .46-.697l-.648-1.516c.963-.317 1.865-.98 2.62-1.943.98-1.255 1.568-2.88 1.568-4.344A5.506 5.506 0 0 0 8 1m3.082 5.493a.5.5 0 0 1-.575-.41 2.58 2.58 0 0 0-2.089-2.09.5.5 0 1 1 .165-.986 3.59 3.59 0 0 1 2.91 2.91.5.5 0 0 1-.41.576" /></g><defs><clipPath id="balloon-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBalloonFill);
const Memo = memo(ForwardRef);
export default Memo;