import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPingPongFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#ping-pong-fill_svg__a)"><path fill="#000" d="M15 12.25a1 1 0 0 0-.416-.731L12.21 9.822l1.063-1.06a2.48 2.48 0 0 0 .687-2.236 6.22 6.22 0 0 0-2.212-3.618A6.37 6.37 0 0 0 7.66 1.5 6.27 6.27 0 0 0 1.5 7.661a6.38 6.38 0 0 0 1.41 4.08 6.22 6.22 0 0 0 3.617 2.213 2.48 2.48 0 0 0 2.237-.688l1.06-1.062 1.697 2.375a1 1 0 0 0 .729.421l.082.003a1 1 0 0 0 .707-.293l1.665-1.665A1 1 0 0 0 15 12.25M12.338 14l-2.04-2.855a.5.5 0 0 0-.366-.208h-.04a.5.5 0 0 0-.354.146L8.06 12.56a1.48 1.48 0 0 1-1.335.415 5 5 0 0 1-.77-.22l6.8-6.8q.14.376.22.77a1.48 1.48 0 0 1-.415 1.335l-1.48 1.475a.5.5 0 0 0 .063.76L14 12.335z" /></g><defs><clipPath id="ping-pong-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPingPongFill);
const Memo = memo(ForwardRef);
export default Memo;