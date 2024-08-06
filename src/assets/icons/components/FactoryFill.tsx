import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFactoryFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#factory-fill_svg__a)"><path fill="#000" d="M14.5 13H14V8.429l-.937-6.57A1.005 1.005 0 0 0 12.066 1h-1.132a1.005 1.005 0 0 0-.99.859L9.22 6.916 6.8 5.1a.5.5 0 0 0-.8.4v2L2.8 5.1a.5.5 0 0 0-.8.4V13h-.5a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1m-7.75-1.5H5a.5.5 0 0 1 0-1h1.75a.5.5 0 0 1 0 1m4.25 0H9.25a.5.5 0 0 1 0-1H11a.5.5 0 0 1 0 1M10.667 8l-.533-.4.8-5.6h1.132l.858 6z" /></g><defs><clipPath id="factory-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFactoryFill);
const Memo = memo(ForwardRef);
export default Memo;