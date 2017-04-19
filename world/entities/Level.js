class Level {
    constructor(chapterID, levelID){
        this.map = [[]];
        this.in_x;
        this.in_y;
        this.out_x;
        this.out_y;

        this.load(chapterID, levelID);
    }

    load(chapterID, levelID){
        var levelText;
        var map;
        var param;
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", "resources/chapters/" + String(chapterID) + "/lvl_" + String(levelID) + ".lvl", false);
        rawFile.onreadystatechange = function(){
            if (rawFile.readyState === 4 && (rawFile.status === 200 || rawFile.status === 0))
                levelText = rawFile.responseText;
        };
        rawFile.send(null);

        map = levelText.replace(/[^]*:[^\n]*\n/, "");
        param = levelText.replace(map, "");

        this.map = new Array(32);
        for (var x = 0; x < 32; x++) {
            this.map[x] = new Array(18);
            for (var y = 0; y < 18; y++)
                this.map[x][y] = map.charAt(y*(33) + x);
        }
    }

    getBlock(x, y){
        return Block.getBlock(this.map[x][y]);
    }

    render(){
        for (var x = 0; x < 32; x++)
            for (var y = 0; y < 18; y++)
                this.getBlock(x, y).render();

    }

}
