import json

import_data = open('bb.json').read()
json_data = json.loads(import_data) 
data = ""

for i in range(1,len(json_data)):
	adr = str(json_data[i][5]).replace('\r\n',' ')
	adr = adr.replace(',',';')
	tmp = '"'+str(json_data[i][0])+'"'+","+'"'+str(json_data[i][1])+'"'+","+'"'+str(json_data[i][25])+'"'+","+'"'+str(json_data[i][26])+'"'+","+'"'+adr+'"'+","+'"'+str(json_data[i][8])+'"'+'\n'
	data += tmp

#print(lx)
#print(data)

f = open('dataset_mapping.csv','w')
f.write(data)
f.close()
