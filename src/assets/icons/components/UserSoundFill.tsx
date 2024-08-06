import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgUserSoundFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#user-sound-fill_svg__a)"><path fill="#000" d="M12.383 12.678A.5.5 0 0 1 12 13.5H1.5a.5.5 0 0 1-.383-.822c.934-1.111 2.095-1.9 3.386-2.323a4.25 4.25 0 1 1 4.494 0c1.29.423 2.452 1.212 3.386 2.323m-.08-8.841a.5.5 0 0 0-.263.656 5.77 5.77 0 0 1 0 4.514.5.5 0 0 0 .92.393 6.77 6.77 0 0 0 0-5.3.5.5 0 0 0-.656-.263m2.491-.534a.5.5 0 1 0-.918.394 7.78 7.78 0 0 1 0 6.106.501.501 0 1 0 .918.394 8.77 8.77 0 0 0 0-6.894" /></g><defs><clipPath id="user-sound-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgUserSoundFill);
const Memo = memo(ForwardRef);
export default Memo;