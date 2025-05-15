var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-conwaysIris",
  "level": "1",
  "url": "sec-conwaysIris.html",
  "type": "Section",
  "number": "1.1",
  "title": "Construct Conway’s Iris",
  "body": " Construct Conway's Iris     Recall when two triangles are congruent    Review the three centers of a triangle    Practice contstructing the proof of an adorable and happily useless fact about triangles!        "
},
{
  "id": "sec-conwaysIris-2",
  "level": "2",
  "url": "sec-conwaysIris.html#sec-conwaysIris-2",
  "type": "Objectives",
  "number": "1.1",
  "title": "",
  "body": "   Recall when two triangles are congruent    Review the three centers of a triangle    Practice contstructing the proof of an adorable and happily useless fact about triangles!    "
},
{
  "id": "sec-conwaysIris-3",
  "level": "2",
  "url": "sec-conwaysIris.html#sec-conwaysIris-3",
  "type": "Activity",
  "number": "1.1.1",
  "title": "",
  "body": "  "
},
{
  "id": "sec-sketchDerivativeCubic",
  "level": "1",
  "url": "sec-sketchDerivativeCubic.html",
  "type": "Section",
  "number": "1.2",
  "title": "Sketch the Derivative of a Function",
  "body": " Sketch the Derivative of a Function     "
},
{
  "id": "sec-sketchDerivativeCubic-2",
  "level": "2",
  "url": "sec-sketchDerivativeCubic.html#sec-sketchDerivativeCubic-2",
  "type": "Activity",
  "number": "1.2.1",
  "title": "",
  "body": "  "
},
{
  "id": "sec-kenken",
  "level": "1",
  "url": "sec-kenken.html",
  "type": "Section",
  "number": "1.3",
  "title": "KenKen Puzzle (6x6)",
  "body": " KenKen Puzzle (6x6)   "
},
{
  "id": "sec-mutilatedChessboard",
  "level": "1",
  "url": "sec-mutilatedChessboard.html",
  "type": "Section",
  "number": "1.4",
  "title": "The Mutilated Chessboard",
  "body": " The Mutilated Chessboard   "
},
{
  "id": "sec-triangleExistence",
  "level": "1",
  "url": "sec-triangleExistence.html",
  "type": "Section",
  "number": "1.5",
  "title": "Triangle Existence",
  "body": " Triangle Existence   "
},
{
  "id": "sec-inequalities",
  "level": "1",
  "url": "sec-inequalities.html",
  "type": "Section",
  "number": "1.6",
  "title": "An Introduction to Inequalities",
  "body": " An Introduction to Inequalities   "
},
{
  "id": "sec-interactiveVenn",
  "level": "1",
  "url": "sec-interactiveVenn.html",
  "type": "Section",
  "number": "1.7",
  "title": "An Interactive Venn Diagram for Classifying Numbers",
  "body": " An Interactive Venn Diagram for Classifying Numbers     "
},
{
  "id": "sec-interactiveVenn-2",
  "level": "2",
  "url": "sec-interactiveVenn.html#sec-interactiveVenn-2",
  "type": "Activity",
  "number": "1.7.1",
  "title": "",
  "body": "  "
},
{
  "id": "sec-letstakeawalk",
  "level": "1",
  "url": "sec-letstakeawalk.html",
  "type": "Section",
  "number": "1.8",
  "title": "Systems of Linear Equations",
  "body": " Systems of Linear Equations   "
},
{
  "id": "sec-parametric",
  "level": "1",
  "url": "sec-parametric.html",
  "type": "Section",
  "number": "1.9",
  "title": "Parametric Curve Plotter",
  "body": " Parametric Curve Plotter   "
},
{
  "id": "sec-solvinglinearinequalities",
  "level": "1",
  "url": "sec-solvinglinearinequalities.html",
  "type": "Section",
  "number": "1.10",
  "title": "Solving Linear Inequalities in One Variable",
  "body": " Solving Linear Inequalities in One Variable   "
},
{
  "id": "sec-sketchRiemannSums",
  "level": "1",
  "url": "sec-sketchRiemannSums.html",
  "type": "Section",
  "number": "1.11",
  "title": "Sketching Riemann Sums",
  "body": " Sketching Riemann Sums   "
},
{
  "id": "sec-squareofsum",
  "level": "1",
  "url": "sec-squareofsum.html",
  "type": "Section",
  "number": "1.12",
  "title": "Square+ception",
  "body": " Square+ception   "
},
{
  "id": "sec-watchPuzzle",
  "level": "1",
  "url": "sec-watchPuzzle.html",
  "type": "Section",
  "number": "1.13",
  "title": "The Watch Face Puzzle",
  "body": " The Watch Face Puzzle   "
},
{
  "id": "sec-absValueInequalities",
  "level": "1",
  "url": "sec-absValueInequalities.html",
  "type": "Section",
  "number": "1.14",
  "title": "Solving Absolute Value Inequalities",
  "body": " Solving Absolute Value Inequalities   "
},
{
  "id": "sec-pascalsTriangle",
  "level": "1",
  "url": "sec-pascalsTriangle.html",
  "type": "Section",
  "number": "1.15",
  "title": "Pascal’s Triangle",
  "body": " Pascal's Triangle   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
