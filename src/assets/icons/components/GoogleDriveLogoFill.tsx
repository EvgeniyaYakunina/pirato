import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGoogleDriveLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#google-drive-logo-fill_svg__a)"><path fill="#000" d="M14.85 8.986 10.57 1.97a1 1 0 0 0-.848-.47H6.277a.99.99 0 0 0-.848.47l-.003.004-4.274 7.007a1 1 0 0 0-.02 1.027l1.707 2.988a1 1 0 0 0 .868.504h8.585a1 1 0 0 0 .868-.504l1.707-2.988a1 1 0 0 0-.017-1.022M13.688 9h-2.905l-2.2-3.667 1.422-2.37zm-7.905 1h4.434l1.5 2.5H4.283zm.6-1L8 6.305 9.617 9zm-.389-6.037 1.423 2.37L5.217 9H2.312z" /></g><defs><clipPath id="google-drive-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGoogleDriveLogoFill);
const Memo = memo(ForwardRef);
export default Memo;