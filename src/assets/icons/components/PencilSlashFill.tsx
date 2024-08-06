import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPencilSlashFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#pencil-slash-fill_svg__a)"><path fill="#000" d="M3.37 2.164a.5.5 0 1 0-.74.672L5.643 6.15l-3.35 3.35a1 1 0 0 0-.293.708V13a1 1 0 0 0 1 1h2.793a.99.99 0 0 0 .707-.293l3.15-3.15 2.98 3.28a.499.499 0 1 0 .74-.673zM6.316 6.89l.997 1.093-3.063 3.059L3.207 10zM3 13v-1.793L4.793 13zm3-.207L4.957 11.75l3.026-3.026.993 1.093zM14.208 6l-2.77 2.771a.501.501 0 0 1-.709-.709l.918-.917-1.043-1.041-.835.833a.5.5 0 0 1-.707-.707l.835-.834-1.043-1.042-.75.75a.5.5 0 0 1-.708-.707L10 1.793a1 1 0 0 1 1.414 0l2.794 2.792a1 1 0 0 1 0 1.415" /></g><defs><clipPath id="pencil-slash-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPencilSlashFill);
const Memo = memo(ForwardRef);
export default Memo;