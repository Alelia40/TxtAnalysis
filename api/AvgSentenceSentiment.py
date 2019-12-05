def main(blob):

    pol = []
    subj = []
    for s in blob.sentences:
        pol.append(s.polarity)
        subj.append(s.subjectivity)

    avg_pol = sum(pol) / len(pol)
    avg_subj = sum(subj) / len(subj)

    return avg_pol, avg_subj
