import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSwatchesFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#swatches-fill_svg__a)"><path fill="#000" d="M15 9.744a1 1 0 0 0-.062-.326l-1.192-3.263a1 1 0 0 0-1.278-.593L8.23 7.098l.755-4.312a1 1 0 0 0-.807-1.161l-3.417-.61a.996.996 0 0 0-1.155.813l-1.562 8.945A2.74 2.74 0 0 0 4.736 14H14a1 1 0 0 0 1-1zM4.75 12.25a1 1 0 1 1 0-2 1 1 0 0 1 0 2m2.67-.524.611-3.495L12.808 6.5 14 9.757 7.3 12.187q.08-.226.121-.46M14 13H7.984L14 10.82z" /></g><defs><clipPath id="swatches-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSwatchesFill);
const Memo = memo(ForwardRef);
export default Memo;