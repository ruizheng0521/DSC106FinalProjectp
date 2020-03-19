function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
    url = "https://public.tableau.com/views/Deforestration/Sheet1?:display_count=y&publish=yes&:origin=viz_share_link";

    var viz = new tableau.Viz(worldViz, url);
}

