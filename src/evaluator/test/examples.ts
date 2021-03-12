'use strict';

/**
 * @fileoverview Holds many useful examples of our types in types.ts primarily for the purposes of testing
 * 
 * @author Alice Russell
 * 
 * Naming scheme:
 * 
 * All values are named <value>Val
 * All vindings are named <name><boundValue>Bind
 */


 import { 
  NumTok, IdTok, StringTok, BooleanTok, CommentTok,
  NumAtom, IdAtom, StringAtom, BooleanAtom, SExps,
  NFn, Bind
} from './../constructors';

// ----------------------------------------------------------------------------
// | Token examples                                                           |
// ----------------------------------------------------------------------------

export const negThirteenTok = NumTok('-13');
export const negOneTok = NumTok('-1');
export const negZeroTok = NumTok('-0');
export const zeroTok = NumTok('0');
export const oneTok = NumTok('1');
export const thirteenTok = NumTok('13');

export const helloIdTok = IdTok('hello');
export const goodbyeIdTok = IdTok('goodbye');

export const helloStringTok = StringTok('hello');
export const goodbyeStringTok = StringTok('goodbye');

export const trueTok = BooleanTok('#t');
export const falseTok = BooleanTok('#f');

// ----------------------------------------------------------------------------
// | SExp examples                                                            |
// ----------------------------------------------------------------------------

export const negThirteenAtom = NumAtom(-13);
export const negOneAtom = NumAtom(-1);
export const negZeroAtom = NumAtom(-0);
export const zeroAtom = NumAtom(0);
export const oneAtom = NumAtom(1);
export const thirteenAtom = NumAtom(13);

export const helloIdAtom = IdAtom('hello');
export const goodbyeIdAtom = IdAtom('goodbye');

export const helloStringAtom = StringAtom('hello');
export const goodbyeStringAtom = StringAtom('goodbye');

export const trueAtom = BooleanAtom("#t");
export const falseAtom = BooleanAtom('#f');

// ----------------------------------------------------------------------------
// | Definition examples                                                      |
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// | Expr examples                                                            |
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// | Result examples                                                          |
// ----------------------------------------------------------------------------

export const tenVal = NFn(10);
export const helloVal = NFn('hello');
export const goodbyeVal = NFn('goodbye');

export const tenBind = Bind('x', tenVal);
export const xNullBind = Bind('x', null);
export const sHelloBind = Bind('s', helloVal);
export const sGoodbyeBind = Bind('s', goodbyeVal);
export const tGoodByeBind = Bind('t', goodbyeVal);