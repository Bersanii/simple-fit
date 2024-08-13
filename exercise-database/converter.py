import json

def sanitize(text):
    sqlBadChars = [";", "'", "=", "\\\\"] # and probably more
    slist = list(text) # make a list of the orig username
    for badChar in sqlBadChars: # for each bad char in the array...
        for i,c in enumerate(slist, start=0): # for each char letter,char in the list...
                if str(slist[i]) == str(badChar): # check if the character indexed is in blacklist
                        slist[i] = ' ' # replace with a space

    return ''.join(slist)

with open('exercises.json') as f:
    json_data  = json.load(f)

print(len(json_data))

f = open("exercicios-inserts.txt", "x")
for exercicio in json_data:
    f.write(f"await queryRunner.query(`INSERT INTO especificacaoExercicio (nome, grupamento, instrucoes, equipamento) VALUES('{sanitize(exercicio['name'])}', '{exercicio['primaryMuscles'][0]}', '', '{exercicio['equipment']}')`)\n")
