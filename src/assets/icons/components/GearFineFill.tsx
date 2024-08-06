import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGearFineFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#gear-fine-fill_svg__a)"><path fill="#000" d="M14.5 7.5h-.521a6 6 0 0 0-.551-2.056l.451-.26a.5.5 0 0 0-.5-.867l-.453.262a6.1 6.1 0 0 0-1.505-1.505l.262-.453a.5.5 0 1 0-.866-.5l-.26.451a6 6 0 0 0-2.057-.55V1.5a.5.5 0 1 0-1 0v.521a6 6 0 0 0-2.056.551l-.26-.451a.5.5 0 0 0-.867.5l.262.453a6.1 6.1 0 0 0-1.505 1.505l-.453-.262a.5.5 0 0 0-.5.866l.451.26a6 6 0 0 0-.55 2.057H1.5a.5.5 0 1 0 0 1h.521c.059.713.245 1.41.551 2.056l-.451.26a.5.5 0 1 0 .5.867l.453-.262a6.1 6.1 0 0 0 1.505 1.505l-.262.453a.5.5 0 0 0 .866.5l.26-.451a6 6 0 0 0 2.057.55v.522a.5.5 0 0 0 1 0v-.521a6 6 0 0 0 2.056-.551l.26.451a.5.5 0 0 0 .867-.5l-.262-.453a6.1 6.1 0 0 0 1.505-1.505l.453.262a.5.5 0 1 0 .501-.866l-.452-.26A6 6 0 0 0 13.98 8.5h.521a.5.5 0 0 0 0-1M4.5 8a3.5 3.5 0 0 1 1.336-2.75L7.423 8l-1.587 2.75A3.5 3.5 0 0 1 4.5 8M8 11.5c-.445 0-.886-.084-1.299-.25L8.29 8.5h3.175A3.506 3.506 0 0 1 8 11.5m.289-4L6.7 4.75a3.5 3.5 0 0 1 4.763 2.75z" /></g><defs><clipPath id="gear-fine-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGearFineFill);
const Memo = memo(ForwardRef);
export default Memo;