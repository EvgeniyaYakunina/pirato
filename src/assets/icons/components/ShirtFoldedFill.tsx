import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgShirtFoldedFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#shirt-folded-fill_svg__a)"><path fill="#000" d="M12.563 2.5h-1.354l-.855-.854A.5.5 0 0 0 10 1.5H6a.5.5 0 0 0-.354.146l-.855.854H3.437a.937.937 0 0 0-.937.938v9.625a.937.937 0 0 0 .938.937H7.25a.25.25 0 0 0 .25-.25V6.517A.51.51 0 0 1 7.967 6a.5.5 0 0 1 .533.5v7.25a.25.25 0 0 0 .25.25h3.813a.94.94 0 0 0 .937-.937V3.438a.94.94 0 0 0-.937-.938M5.409 6.693A.25.25 0 0 1 5 6.5V3.707l.952-.953L7.42 4.955zM11 6.5a.25.25 0 0 1-.407.195L8.581 4.956l1.467-2.2.952.95z" /></g><defs><clipPath id="shirt-folded-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgShirtFoldedFill);
const Memo = memo(ForwardRef);
export default Memo;