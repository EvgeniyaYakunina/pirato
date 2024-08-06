import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBluetoothXFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#bluetooth-x-fill_svg__a)"><path fill="#000" d="M11.5 11a.5.5 0 0 1-.2.4l-4 3a.5.5 0 0 1-.8-.42V9l-3.203 2.4a.5.5 0 0 1-.697-.097.516.516 0 0 1 .112-.714L6.166 8 2.711 5.41a.51.51 0 0 1-.133-.682.5.5 0 0 1 .72-.125L6.5 7V2.015a.51.51 0 0 1 .177-.396.5.5 0 0 1 .625-.019l2.101 1.575a.25.25 0 0 1 .097.2v3.25a.25.25 0 0 1-.1.2L7.834 8l3.468 2.6a.5.5 0 0 1 .198.4m3.342-4.867L13.71 5l1.131-1.132a.513.513 0 0 0 .026-.71.5.5 0 0 0-.718-.012l-1.147 1.147-1.132-1.132a.514.514 0 0 0-.677-.055.5.5 0 0 0-.046.75L12.296 5 11.16 6.133a.51.51 0 0 0-.037.694.5.5 0 0 0 .732.027l1.147-1.147 1.147 1.147a.5.5 0 0 0 .732-.027.513.513 0 0 0-.038-.694z" /></g><defs><clipPath id="bluetooth-x-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBluetoothXFill);
const Memo = memo(ForwardRef);
export default Memo;